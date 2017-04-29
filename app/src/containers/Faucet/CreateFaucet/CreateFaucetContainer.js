import { connect } from 'react-redux'
import CreateFaucetForm from 'components/Faucet/CreateFaucetForm'
import { getAllFaucets, createFaucet } from 'store/ethereum/faucet'

const mapStateToProps = (state, ownProps) => {
  return {
    faucet: state.faucet
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateFaucetSubmit: (data) => {
      event.preventDefault()
      dispatch(createFaucet(data.name, data.fromAddress))
    },
    onGetAllFaucets: () => {
      event.preventDefault()
      dispatch(getAllFaucets())
    }
  }
}

const CreateFaucetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateFaucetForm)

export default CreateFaucetContainer
