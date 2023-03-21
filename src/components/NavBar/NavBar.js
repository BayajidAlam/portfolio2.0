import React from 'react';

const NavBar = () => {

  const scroll = (id_name) => {
    const section = document.querySelector(`#${id_name}`);
    section.scrollIntoView({behavior: "smooth", block: "start"})
  }

  
  return (
    <div>
      <p>NavBar</p>
    </div>
  );
};

export default NavBar;