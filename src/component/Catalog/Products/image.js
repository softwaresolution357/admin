import React from 'react';
import './image.css';
import ImageUpload from './image_upload';

export const Image = () => {
  const style = {
    width: '0px',
    height: '0px',
    overflow: 'hidden'
  };

  return (
    <div class="" id="profile2" role="tabpanel">
      <div data-repeater-list="outer-group" class="outer">
        <div data-repeater-item="" class="outer">
          <br />
          <div class="container">
            <div class="row">
              <div class="col-sm-2 imgUp">
                <div class="imagePreview"></div>
                <label class="btn btn-primary-img">
                  Upload
                  <input type="file" class="uploadFile img" style={style} />
                </label>
              </div>
              <i class="fa fa-plus imgAdd" onClick={ImageUpload}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
