import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { updateEntryRedux } from '../actions/entries.actions';
import { closeEditModal } from '../actions/modals.actions';
import useEntryDetails from '../hooks/useEntryDetails';
import EntryForm from './EntryForm';

function ModalEdit({
    isOpen, 
    description, 
    value, 
    isExpense, 
    setDescription, 
    setValue, 
    setIsExpense, 
    id}) {

    const dispatch = useDispatch();
    const entryUpdate = useEntryDetails(description, value, isExpense);

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm {...entryUpdate} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => entryUpdate.updateEntry(id)} primary>
                    Ok
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;