import React from 'react';

function VikingHelmet(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <>
     <img src="https://www.freecodecamp.org/news/content/images/2023/12/The-Odin-Project.png" alt="" className = "card-image"/>

    </>
  );
}

VikingHelmet.displayName = 'VikingHelmet';

export default VikingHelmet;
