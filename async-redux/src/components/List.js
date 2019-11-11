import React from 'react';
import { connect } from 'react-redux';
import { getDummy } from '../actions/actions';

const List = props => {
    const fetchDummy = event => {
        event.preventDefault();
        props.getDummy();
    };
    return (
        <>
            <h2>Welcome to OverWatch World!</h2>
            <div>
                {props.dummy && props.dummy.map(dummy => (
                    <div className="dummy" key={dummy.id}><h4>{dummy.name}</h4><br />
                        <p>{dummy.description}</p><br />
                        <p>Health:{dummy.health},<br />age:{dummy.age}</p>
                    </div>
                ))}
            </div>
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={fetchDummy}>Fetch Info!</button>
        </>
    )
};
const mapStateToProps = state => ({
    dummy: state.dummy,
    error: state.error
});
export default connect(mapStateToProps, { getDummy })(List);