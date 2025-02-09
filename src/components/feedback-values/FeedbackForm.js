import './FeedbackForm.css';

const FeedbackForm = ({
  setGoodfb,
  setNeutralfb,
  setBadfb,
  goodfb,
  neutralfb,
  badfb,
}) => {
  const data = [
    { id: 1, value: 'good', text: 'Good', className: 'greenBtn' },
    { id: 2, value: 'neutral', text: 'Neutral', className: 'greyBtn' },
    { id: 3, value: 'bad', text: 'Bad', className: 'redBtn' },
  ];

  const clickHandle = e => {
    const value = e.target.value;
    if (value === 'good') setGoodfb(goodfb + 1);
    if (value === 'neutral') setNeutralfb(neutralfb + 1);
    if (value === 'bad') setBadfb(badfb + 1);
  };
  return (
    <div className="feedbackBtns">
      {data.map(btn => {
        const { id, value, text, className } = btn;
        return (
          <button
            key={id}
            className={`feedBackBtn ${className}`}
            value={value}
            onClick={clickHandle}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackForm;
