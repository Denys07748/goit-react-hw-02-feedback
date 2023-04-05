import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({onIncrGood, onIncrNeutral, onIncrBad}) => {
    return (
        <div className={css['button-box']}>
            <button type='button' onClick={onIncrGood}>Good</button>
            <button type='button' onClick={onIncrNeutral}>Neutral</button>
            <button type='button' onClick={onIncrBad}>Bad</button>
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onIncrGood: PropTypes.func.isRequired,
    onIncrNeutral: PropTypes.func.isRequired,
    onIncrBad: PropTypes.func.isRequired,
}