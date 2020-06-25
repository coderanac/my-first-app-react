import React from 'react';
import User from './User';
import photo from './cat.jpeg';

function NewComponent() {
  return (
    <section>
      <p>Cat Component</p>
      <User photo={photo} name="Cats"></User>
    </section>
  );
}

export default NewComponent;