import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import * as s from './TabSavedMessage.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const TabSavedMessage = () => {
    const isSaving = useSelector(state => state.tab.isSaving);
    const savingError = useSelector(state => state.tab.savingError);
    const [step, setStep] = useState('EMPTY');

    useEffect(() => {
        function setErrorView() {
            setStep('EMPTY');
            const errorMessage = savingError === 'You must be logged in'
                ? 'Esta tablatura só pode ser editada pelo dono.'
                : savingError;
            message.error(errorMessage);
        }

        function timeoutToHideMessage() {
            setTimeout(() => setStep('EMPTY'), 4000);
        }

        function checkFinishSaving() {
            const hasError = savingError !== null;
            if (hasError) {
                setErrorView();
                return;
            }
            const wasSaving = step === 'SAVING';
            if (wasSaving) {
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
    }, [isSaving, savingError]);

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
