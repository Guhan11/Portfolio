import React from 'react';
import ProjectBox from './ProjectBox';
import WarehouseManagementImage from '../images/WarehouseManagementImage.png';
import SecuritySystemForAtmUsersImage from '../images/SecuritySystemForAtmUsersImage.jpg';
import TouristGuideApplicationImage from '../images/TouristGuideApplicationImage.jpg';
import ReturnablePackageImage from '../images/ReturnablePackageImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ReturnablePackageImage} projectName="ReturnablePackage" />
        <ProjectBox projectPhoto={WarehouseManagementImage} projectName="WarehouseManagement" />
        <ProjectBox projectPhoto={SecuritySystemForAtmUsersImage} projectName="SecuritySystemForAtmUsers" />
        <ProjectBox projectPhoto={TouristGuideApplicationImage} projectName="TouristGuideApplication" />
      </div>

    </div>
  )
}

export default Projects