import React from 'react';

interface FolderCardProps {
  id: string;
  title: string;
  entry: string | React.ReactNode;
  onOpen: () => void;
  className?: string;
}

export const FolderCard: React.FC<FolderCardProps> = ({ id, title, entry, onOpen, className = "" }) => {
  return (
    <a href="javascript:void(0)" className={`c-card c-card--green ${className}`} onClick={onOpen}>
      <dl className="c-card__definition">
        <dt className="c-card__title">{title}</dt>
        <dd className="c-card__entry">{entry}</dd>
      </dl>
      <button className="c-card__button c-card__button--large" onClick={(e) => { e.stopPropagation(); onOpen(); }}>
        Info
      </button>
    </a>
  );
};