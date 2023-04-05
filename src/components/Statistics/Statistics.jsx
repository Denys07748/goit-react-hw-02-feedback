import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, percent}) => {
    return (
        <ul className={css['stat-list']}>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                <p>Bed: {bad}</p>
            </li>
            <li>
                <p>Total: {total}</p>
            </li>
            <li>
                <p>Positive Feedback: {percent}%</p>
            </li>
        </ul>
    )
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  percent: PropTypes.number,
};