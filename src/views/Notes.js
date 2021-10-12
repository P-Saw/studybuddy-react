import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import { useSelector } from 'react-redux';
import Note from 'components/molecules/Note/Note';
import { useDispatch } from 'react-redux';
import { addNote } from 'store';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddUser = ({ title, content }) => {
    dispatch(addNote({ title, content }));
    reset();
  };

  return (
    <Wrapper>
      <FormWrapper as="form" onSubmit={handleSubmit(handleAddUser)}>
        <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
        {errors.login && <span>Title is required</span>}
        <StyledFormField isTextarea label="Content" name="content" id="content" {...register('content', { required: true })} />
        {errors.content && <span>Content is required</span>}
        <Button type="submit">Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note.</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
