import * as React from 'react';

interface IMenuButtonProps {
    onClick: () => void;
}
    
const MenuButton: React.FC<IMenuButtonProps> = (props) => {
    return (
      <div> 
          <button onClick={props.onClick}>Menu</button>
      </div>
    );
}
export default MenuButton;
    