import './searchItem.css'

const SearchItem=()=> {
    return (
      <div>
        <div className="SearchItem">
            <img alt="" className="siImg" src="https://cf.bstatic.com/xdata/images/hotel/square600/230578995.webp?k=adc942f7ee40523926c97a43741ae4f0b8ec276025702b495fec4237101b3666&o=" />
            <div className="siDesc">
                <h1 className="siTitle">ibis Styles Arnhem Centre
</h1>
                <span className="siDistance">500 m from center</span>
                <span className="siTaxiOp">Free airport Taxi</span>
                <span className="siSubtitle">Studio apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">you can cancel later,so lock in this great price today!</span>

            </div>
            <div className="siDetails">
            <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>



<div className="SearchItem">
<img alt="" className="siImg" src="https://cf.bstatic.com/xdata/images/hotel/square600/465660282.webp?k=8ea2f01af052317c72ece87f11be2cc03a56fb23c54950558cdc2136a65a4d37&o=" />
<div className="siDesc">
    <h1 className="siTitle">ITC Grand Chola, a Luxury Collection Hotel, Chennai

</h1>
    <span className="siDistance">3.6km from center</span>
    <span className="siTaxiOp">Free airport Taxi</span>
    <span className="siSubtitle">Studio apartment with Air conditioning</span>
    <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
    <span className="siCancelOp">Free cancellation</span>
    <span className="siCancelOpSubtitle">you can cancel later,so lock in this great price today!</span>

</div>
<div className="siDetails">
<div className="siRating">
<span>Excellent</span>
<button>9.0</button>
</div>
<div className="siDetailTexts">
<span className="siPrice">$170</span>
<span className="siTaxOp">Includes taxes and fees</span>
<button className="siCheckButton">See availability</button>
</div>
</div>
</div>
</div>

  );
};
           
export default SearchItem;