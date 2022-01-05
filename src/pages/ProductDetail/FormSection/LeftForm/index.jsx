import React, { useEffect, useState } from 'react';
import { Left } from '../../../../components/containers';
import { Title } from '../../../../components/Typography';
import { useForm } from 'react-hook-form';
import Experience from '../../ProductCanvas/threejs/Experience/Experience';
import { useSelector } from 'react-redux';
import { UploadImage } from '../../../../components/Upload';

export default function LeftForm() {
  const [experience, setExperience] = useState(null);
  const [meshList, setMeshList] = useState([]);

  const experienceRedux = useSelector((state) => state.experience);

  //#region useForm
  const { watch, register, control, getValues } = useForm();
  const watchSize = watch('size', '1x1x1');
  const watchImage = watch('image');
  //#endregion

  //#region useEffect(experience, watchSize, watchImage, meshList)
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

  useEffect(() => {
    if (
      experience &&
      experience instanceof Experience &&
      watchImage instanceof FileList &&
      watchImage.length > 0
    ) {
      const reader = new FileReader();

      const file = watchImage[0];
      const name = 'image' + Date.now();

      const sources = [
        {
          name,
          type: 'texture',
          path: '',
        },
      ];

      reader.onload = function (e) {
        sources[0].path = e.target.result;
        experience.resources.loadMore(sources);
        const selectedMeshName = getValues('meshName');
        experience.resources.on('ready', () => {
          experience.applyTexture(
            experienceRedux.currentModelName,
            name,
            selectedMeshName
          );
        });
      };
      reader.readAsDataURL(file);
    }

    return () => {
      if (experience && experience instanceof Experience) {
        experience.resources.off('ready');
      }
    };
  }, [experience, watchImage, experienceRedux.currentModelName, getValues]);

  useEffect(() => {
    if (experience && experience instanceof Experience) {
      setMeshList(experience.getCurrentModelMeshList());
    }
  }, [experience]);
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
        <select id="mesh-name-select" {...register('meshName')}>
          {meshList.map((mesh) => (
            <option key={mesh?.uuid}>{mesh?.name}</option>
          ))}
        </select>
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
