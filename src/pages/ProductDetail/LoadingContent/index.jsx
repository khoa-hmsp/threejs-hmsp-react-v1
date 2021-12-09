import React, { useEffect, useState } from 'react';
import { Container } from '../../../components/containers';
import Left from '../../../components/containers/Left';
import Loading from '../../../components/Loading';
import Experience from '../ProductCanvas/threejs/Experience/Experience';
import { finishLoadingExperience } from '../../../redux/experience/slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function LoadingContent() {
  const [experience, setExperience] = useState(null);
  const [percentage, setPercentage] = useState(0);

  const dispatch = useDispatch();
  const isLoadingExperience = useSelector(
    (state) => state.experience.isLoading
  );

  useEffect(() => {
    setExperience(new Experience());
  }, []);

  useEffect(() => {
    if (experience) {
      experience.resources.on('progress', () => {
        const loadingRatio = Math.round(
          (experience.resources.loaded * 100) / experience.resources.toLoad
        );
        setPercentage(loadingRatio);
        if (loadingRatio === 100) {
          setTimeout(() => {
            dispatch(finishLoadingExperience());
          }, 1000);
        }
      });
    }

    return () => {
      if (experience instanceof Experience) {
        experience.resources.off('progress');
      }
    };
  });

  return (
    <div>
      {isLoadingExperience ? (
        <Container>
          <Left>
            <Loading>{percentage}%</Loading>
          </Left>
        </Container>
      ) : null}
    </div>
  );
}
