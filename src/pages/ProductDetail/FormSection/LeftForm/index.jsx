import React, { useEffect, useState } from 'react';
import { Left } from '../../../../components/containers';
import { Title } from '../../../../components/Typography';
import { useForm } from 'react-hook-form';
import Experience from '../../ProductCanvas/threejs/Experience/Experience';
import { useSelector } from 'react-redux';
import { UploadImage } from '../../../../components/Upload';

export default function LeftForm() {
  const [experience, setExperience] = useState(null);

  const experienceRedux = useSelector((state) => state.experience);

  //#region useForm
  const { watch, register, control } = useForm();
  const watchSize = watch('size', '1x1x1');
  //#endregion

  //#region useEffect(experience, watchSize)
  useEffect(() => {
    setExperience(new Experience());
  }, []);

  useEffect(() => {
    if (experience && experience instanceof Experience) {
      experience.scaleModel(
        experienceRedux.currentModelName,
        parseSizeToScaleFactor(watchSize)
      );
    }
  }, [watchSize, experience, experienceRedux.currentModelName]);
  //#endregion

  const parseSizeToScaleFactor = (strSize = '1x1x1') => {
    const arr = strSize.split('x').map((str) => parseInt(str));
    const scaleFactor = {
      x: arr[0],
      y: arr[1],
      z: arr[2],
    };
    return scaleFactor;
  };

  return (
    <form>
      <Left alignItems="flex-start" flexDirection="column">
        <Title variant="h1" color="white">
          Form Left
        </Title>
        {/* Size */}
        <label htmlFor="sizeSelect">
          <Title color="white" variant="h3">
            Size
          </Title>
        </label>
        <select id="sizeSelect" {...register('size')}>
          <option value="1x1x1">1x1x1</option>
          <option value="1x2x3">1x2x3</option>
          <option value="2x1x3">2x1x3</option>
        </select>
        {/* Upload image */}
        <Title variant="h3" color="white">
          Upload texture
        </Title>
        <label htmlFor="upload-image-input">
          <UploadImage control={control} outerWidth="100px" innerWidth="75px" />
        </label>
        <input
          id="upload-image-input"
          type="file"
          accept="image/*"
          {...register('image')}
          style={{ display: 'none' }}
        />
      </Left>
    </form>
  );
}
