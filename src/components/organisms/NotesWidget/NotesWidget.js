import React from 'react';
import { NotesWrapper, WidgetHandler, Wrapper } from 'components/organisms/NotesWidget/NotesWidget.styles';
import { useSelector } from 'react-redux';
import Note from 'components/molecules/Note/Note';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
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

export default NotesWidget;
