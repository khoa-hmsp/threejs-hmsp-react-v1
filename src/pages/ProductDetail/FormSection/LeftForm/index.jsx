import React, { useEffect } from 'react';
import { Left } from '../../../../components/containers';
import { Title } from '../../../../components/Typography';
import { useForm } from 'react-hook-form';

export default function LeftForm() {
  const { watch, register } = useForm();
  const watchSize = watch('size', '1x1x1');

  useEffect(() => {
    console.log(
      '🚀 ~ file: index.jsx ~ line 13 ~ LeftForm ~ watchSize',
      watchSize
    );
  }, [watchSize]);

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
      </Left>
    </form>
  );
}
