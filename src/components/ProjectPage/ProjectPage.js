import React from 'react';
import './ProjectPage.css';
import FirstProject from '../FirstProject/FirstProject';
import SecondProject from '../SecondProject/SecondProject';
import ThirdProject from '../ThirdProject/ThirdProject';
import ProductList from '../ProductList/ProductList';

function ProjectPage() {
  return (
    <div>
        <ProductList></ProductList>
        <FirstProject></FirstProject>
        <SecondProject></SecondProject>
        <ThirdProject></ThirdProject>
    </div>
  )
}

export default ProjectPage