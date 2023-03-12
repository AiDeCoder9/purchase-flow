import React from 'react';
import Button from '../inputs/Button';

export default function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="header-buttons">
        <Button outline color="secondary" onClick={() => console.log('chat')}>
          Chat with Us
        </Button>
        <Button outline color="light" className="ml-2" onClick={() => console.log('sign up')}>
          Sign in
        </Button>
      </div>
    </header>
  );
}
