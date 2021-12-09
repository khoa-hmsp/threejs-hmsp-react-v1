import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useWatch } from 'react-hook-form';

const color = '#C2891F';
const outerWidth = '150px';
const innerWidth = '125px';

const StyledUploadBorder = styled.div`
  width: ${(props) => props.outerWidth || outerWidth};
  height: ${(props) => props.outerWidth || outerWidth};
  border: 5px dashed ${color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const StyledUpload = styled.img`
  width: ${(props) => props.innerWidth || innerWidth};
  height: ${(props) => props.innerWidth || innerWidth};
  padding: 5px;
`;

const StyledUploadPlaceholder = styled.div`
  width: ${(props) => props.innerWidth || innerWidth};
  height: ${(props) => props.innerWidth || innerWidth};
  padding: 5px;

  background-color: ${color};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 20px;
`;

export default function UploadImage({ control, outerWidth, innerWidth }) {
  const image = useWatch({
    control,
    name: 'image',
  });

  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (image?.[0]) {
      const fr = new FileReader();
      fr.onload = () => {
        setImageSrc(fr.result);
      };
      fr.readAsDataURL(image[0]);
    }
  }, [image]);

  return (
    <StyledUploadBorder outerWidth={outerWidth}>
      {(image?.[0] && (
        <StyledUpload
          alt="upload-image"
          src={imageSrc}
          innerWidth={innerWidth}
        />
      )) || (
        <StyledUploadPlaceholder innerWidth={innerWidth}>
          Upload
        </StyledUploadPlaceholder>
      )}
    </StyledUploadBorder>
  );
}
