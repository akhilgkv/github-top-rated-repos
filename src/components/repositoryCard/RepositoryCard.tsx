import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleUpdate } from '@/redux/toggleSlice';
import { store } from '@/redux/store';
import { Repository } from '@/components/Data';
import * as style from '@/components/repositoryCard/styles/styled';

interface RepositoryCardProps {
  repository: Repository;
}
interface ToggleFlag {
  id: number;
  enabled: boolean;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const repositoryItem = store.getState().repoList.filter(item => item.id === repository.id);
    if (repositoryItem?.length > 0) {
      setIsEnabled(repositoryItem[0].enabled);

    }
  }, [repository.id]);
  const handleToggle = () => {
    const data: ToggleFlag = {
      enabled: !isEnabled,
      id: repository.id
    };
    dispatch(toggleUpdate(data));
    setIsEnabled(!isEnabled);
  };

  return (
    <style.Card>
      <div>
        <style.CardImage src={repository.owner.avatar_url} alt={repository.full_name} />
      </div>
      <style.descriptionDiv>
        <style.NameHeading>{repository.full_name}</style.NameHeading>
        <p>{repository.description}</p>
      </style.descriptionDiv>
      <div>
        <style.CheckboxDiv>
          {isEnabled}
          <input type="checkbox" checked={isEnabled} onChange={handleToggle} />
        </style.CheckboxDiv>
      </div>
    </style.Card>
  );
};

export default RepositoryCard;
