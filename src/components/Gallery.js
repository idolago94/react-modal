import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    pictureSelected(e) {
        this.setState({ index: e.target.id });
    }

    controlImage(action) {
        
        this.setState((prevState) => {
            if(action == 'next') {
                if(prevState.index == this.props.sources.length-1) return { index: 0 }
                else return { index: prevState.index*1+1 }
            }
            else {
                if(prevState.index == 0) return { index: this.props.sources.length-1 }
                else return { index: prevState.index*1-1 }
            }
        })
    }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>{ this.props.title }</h1>
        <div className='view'>
            <img src={this.props.sources[this.state.index]} height={this.props.zoomHeight} width={this.props.zoomWidth} />
        </div>

        <div className='gallery_bar'>
            <img onClick={this.controlImage.bind(this, 'prev')} className='control_img' height={this.props.barHeight || '100'} src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png' />
            <sapn className='row'>{
                this.props.sources.map((src, key) => {
                    
                    if(key == this.state.index) {
                        return (
                            <img id={key} className='image-bar zoom' src={src} height={this.props.barHeight || '100'} onClick={this.pictureSelected.bind(this)} />
                        )
                    }
                    else return (
                        <img id={key} className='image-bar' src={src} height={this.props.barHeight || '100'} onClick={this.pictureSelected.bind(this)} />
                    )
                })
            }</sapn>
            <img onClick={this.controlImage.bind(this, 'next')} className='control_img' height={this.props.barHeight || '100'} src='https://israelbehindthenews.com/wp-content/uploads/2016/04/arrow-right-01-256.png' />
        </div>
      </div>
    );
  }
}

export default Gallery;
