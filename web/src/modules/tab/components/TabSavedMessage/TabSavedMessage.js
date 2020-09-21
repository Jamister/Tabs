import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as s from './TabSavedMessage.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const TabSavedMessage = () => {
    const isSaving = useSelector(state => state.tab.isSaving);
    const [step, setStep] = useState('EMPTY');

    useEffect(() => {
        function timeoutToHideMessage() {
            setTimeout(() => setStep('EMPTY'), 3000);
        }

        function checkFinishSaving() {
            if (step === 'SAVING') {
                setStep('SUCCESS');
                timeoutToHideMessage();
            }
        }

        function showSavingMessage() {
            setStep('SAVING');
        }

        function checkIfIsSaving() {
            return isSaving
                ? showSavingMessage()
                : checkFinishSaving();
        }

        checkIfIsSaving();
    }, [isSaving]);

    if (step === 'SAVING') {
        return (
            <s.SavedMessage>
                Salvando alterações...
            </s.SavedMessage>
        );
    }

    if (step === 'SUCCESS') {
        return (
            <s.SavedMessage success>
                <FontAwesomeIcon icon={faCheck} /> Informações salvas com sucesso!
            </s.SavedMessage>
        );
    }

    return null;
};

export default TabSavedMessage;
