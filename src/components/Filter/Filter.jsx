import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const Filter = ({ following, follow }) => {
  const options = ['show all', 'follow', 'followings'];
  const defaultOption = options[0];
  return (
    <Dropdown
      options={options}
      onChange={e => {
        switch (e.value) {
          case 'followings':
            following();
            break;
          case 'follow':
            follow();
            break;
          case 'show all':
            console.log('followings');
            break;

          default:
            break;
        }
      }}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};
