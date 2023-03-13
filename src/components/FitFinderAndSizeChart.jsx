import fitFinder from '../assets/fitFinder.png';
import sizingGuide from '../assets/sizingGuide.png';
import '../style/FitFinderAndSizeChart.css';
function FitFinderAndSizeChart() {
  return (
    <div className='fit-finder-and-size-chart'>
      <img id='fit-finder' src={fitFinder} alt='fit finder logo' />
      <div className='sizeChart'>
        <h5>Size Chart</h5>
        <img id='size-chart-logo' src={sizingGuide} alt='size chart' />
      </div>
    </div>
  );
}

export default FitFinderAndSizeChart;
