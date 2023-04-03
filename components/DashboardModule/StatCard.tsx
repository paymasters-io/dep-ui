import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const StatCard = ({
  title,
  contentText,
  rateInfo,
}: {
  title: string;
  contentText: string;
  rateInfo: number;
}) => {
  const isTrendPositive = rateInfo > 0;
  return (
    <article className="stat-card">
      <header className="stat-card-header">
        <span className="title">{title}</span>
      </header>

      <div className="stat-card-content">
        <p className="text">{contentText}</p>

        <span className="rate-info">
          <span className="text">
            {isTrendPositive && "+"}
            {rateInfo}%
          </span>
          {isTrendPositive ? (
            <ArrowTrendingUpIcon className="icon" />
          ) : (
            <ArrowTrendingDownIcon className="icon" />
          )}
        </span>
      </div>
    </article>
  );
};

export default StatCard;
