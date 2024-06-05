import React from 'react';

function ReactIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-xXKDEnTt1fCH2E0j5coXR-pMyW3qvnTcGCPyWNuxQ&s" alt="" className = "card-image"/>

    </>
  );
}

ReactIcon.displayName = 'ReactIcon';

export default ReactIcon;
