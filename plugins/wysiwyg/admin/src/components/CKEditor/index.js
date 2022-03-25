import React from 'react';
import PropTypes from 'prop-types';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import styled from 'styled-components';
import ClassicEditor from "ckeditor5-build-strapi-wysiwyg";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const configuration = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    'blockQuote',
    'bulletedList',
    'numberedList',
    '|',
    'indent',
    'outdent',
    'alignment',
    '|',
    'mediaEmbed',
    '|',
    'image',
    'imageInsert',
    'imageCaption',
    'imageResize',
    '|',
    'undo',
    'redo',
    'fontSize',
    'fontColor',
    'fontFamily',
    'list',
  ],
};

const Editor = ({ onChange, name, value }) => {
  
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        config={configuration}
        data={value}
        onReady={(editor) => {
          editor.setData(value);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;