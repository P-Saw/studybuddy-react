import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import Note from 'components/molecules/Note/Note';
import { useForm } from 'react-hook-form';
import { useGetNotesQuery, useAddNoteMutation } from 'store';

const Notes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddUser = ({ title, content }) => {
    addNote({ title, content });
    reset();
  };

  return (
    <Wrapper>
      <FormWrapper as="form" onSubmit={handleSubmit(handleAddUser)}>
        <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
        {errors.title && <span>Title is required</span>}
        <StyledFormField isTextarea label="Content" name="content" id="content" {...register('content', { required: true })} />
        {errors.content && <span>Content is required</span>}
        <Button type="submit">Add</Button>
      </FormWrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
          ) : (
            <p>Create your first note.</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
