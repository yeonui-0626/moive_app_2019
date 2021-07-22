import React from "react";
import Movies from "../components/Movies";

class Detail extends React.Component{
    componentDidMount() {
        const {location, history } = this.props;
        if(location.state === undefined){
        //    홈으로 redirecting
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state) {
            return (
                <div className="movies">
                    <Movies
                        year={location.state.year}
                        summary={location.state.summary}
                        id={location.state.id}
                        title={location.state.title}
                        poster={location.state.poster}
                        genres={location.state.genres}
                    />
                </div>
            )
        }else{
            return null;
        }

    }
}

export default Detail;