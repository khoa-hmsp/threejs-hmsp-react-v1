import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import { Container } from '../../../components/containers';
import Center from '../../../components/containers/Center';
import { toggleEnterModel } from '../../../redux/experience/slice';
import Experience from '../ProductCanvas/threejs/Experience/Experience';

export default function EnterButton() {
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    setExperience(new Experience());
  }, []);

  const dispatch = useDispatch();
  const isSwitchingModel = useSelector(
    (state) => state.experience.isSwitchModel
  );
  const isLoadingExperience = useSelector(
    (state) => state.experience.isLoading
  );
  const isEnteringModel = useSelector((state) => state.experience.isEnterModel);

  const handleEnterExitModel = () => {
    if (experience && experience instanceof Experience) {
      if (!isEnteringModel) {
        experience.focusCurrentModel();
      } else {
        experience.loseFocusCurrentModel();
      }
    }

    dispatch(toggleEnterModel(!isEnteringModel));
  };

  return (
    <Container>
      <Center>
        <Button
          visible={!isSwitchingModel && !isLoadingExperience}
          onClick={handleEnterExitModel}
        >
          {isEnteringModel ? 'Exit' : 'Enter'}
        </Button>
      </Center>
    </Container>
  );
}
