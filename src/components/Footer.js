import React from 'react';

export default function Footer() {
  return (
    <div id="footer">
      <div>Copyright &copy; {(new Date().getFullYear())}&nbsp;<a href="https://kreation.ca">Kal Erikson</a> • <a href="https://github.com/TheMangoTrain">GitHub</a></div>
    </div>
  );
}