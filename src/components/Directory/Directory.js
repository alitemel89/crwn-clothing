import "./Directory.scss";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';

const Directory = ({ sections }) => {

  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return (
          <MenuItem
            key={section.id}
            title={section.title.toUpperCase()}
            imageUrl={section.imageUrl}
            size={section.size}
            linkUrl = {section.linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
