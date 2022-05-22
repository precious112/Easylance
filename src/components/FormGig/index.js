import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { CreateGigBtn, CreateGigBtnTwo, Wrapper } from './FormGig.styles';

const FormGig=(props)=>{

    return(
        <Wrapper>
            <Link to={`/create-gig/${props.profileId}`}>
            <CreateGigBtn>click to post a new gig</CreateGigBtn>
            </Link>
            <Link to={`/create-gig/${props.profileId}`}>
            <CreateGigBtnTwo>
            <FontAwesomeIcon icon={faEdit} />
            </CreateGigBtnTwo>
            </Link>
        </Wrapper>
    );
}
export default FormGig;