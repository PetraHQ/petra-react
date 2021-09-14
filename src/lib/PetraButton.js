import React, { useState } from 'react'
import styles from './styles.module.css'

export const PetraButton = (props) => {
    const { data, label = 'Checkout with Petra' } = props

    const [checkoutActive, setCheckoutActive] = useState(false)
    const [frameVisible, setFrameVisible] = useState(false)

    let iFrameSrc = `https://checkout.petra.africa/?amount=${data.amount}&email=${data.email}&key=${data.key}`
    if (data.payType) iFrameSrc = iFrameSrc + `&id=${data.id}&payType=${data.payType}`
    if (data.reference) iFrameSrc = iFrameSrc + `&reference=${data.reference}`

    const iframeStyle = frameVisible ? { display: 'block' } : { display: 'none' }
    const loaderImageStyle = frameVisible
        ? { display: 'none' }
        : { display: 'grid' }

    const animateIcon = () => {
        document.getElementById('loaderImg').animate(
            [
                // animation keyframes
                { transform: 'scale(0.7)' },
                { transform: 'scale(0.8)' },
                { transform: 'scale(0.7)' }
            ],
            {
                // timing options
                duration: 1000,
                iterations: Infinity
            }
        )
    }

    const openIframe = () => {
        animateIcon()
        iframeData(data)
        setCheckoutActive(true)
    }

    const closeModal = (data) => {
        if (typeof data === 'function') data()
        setCheckoutActive(false)
        setFrameVisible(false)
    }

    const iframeData = (dataFunc) => {
        window.addEventListener('message', function (event) {
            if (event.origin === 'https://checkout.petra.africa') {
                if (event.data === 'false pass') {
                    closeModal(dataFunc.onClose)
                }
                if (event.data === 'false pass1') {
                    closeModal(dataFunc.onSuccess)
                }
            }
        })
    }

    const icons = {
        buttonIcon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 23.05 24.82'
                className={styles.buttonIcon}
            >
                <g data-name='Group 2'>
                    <path
                        data-name='Path 5'
                        d='M2.66,14.18,13.3,3.55V14.18Z'
                        fill='#fff'
                        fillRule='evenodd'
                    />
                </g>
                <path
                    data-name='Path 6'
                    d='M5.32,24.82,23.05,7.09V24.82Z'
                    fill='#fff'
                    fillRule='evenodd'
                />
                <path
                    data-name='Path 7'
                    d='M0,7.09,7.09,0V7.09Z'
                    fill='#fff'
                    fillRule='evenodd'
                />
            </svg>
        ),
        close: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='none'
                viewBox='0 0 24 24'
            >
                <path
                    fill='#aaaaaa'
                    d='M7.05022 7.05028C6.65969 7.4408 6.65969 8.07397 7.05022 8.46449L10.5858 12L7.05023 15.5356C6.6597 15.9261 6.6597 16.5593 7.05023 16.9498C7.44075 17.3403 8.07392 17.3403 8.46444 16.9498L12 13.4142L15.5355 16.9498C15.926 17.3403 16.5592 17.3403 16.9497 16.9498C17.3402 16.5592 17.3402 15.9261 16.9497 15.5356L13.4142 12L16.9497 8.46449C17.3402 8.07397 17.3402 7.4408 16.9497 7.05028C16.5592 6.65976 15.926 6.65976 15.5355 7.05028L12 10.5858L8.46443 7.05028C8.07391 6.65975 7.44074 6.65975 7.05022 7.05028Z'
                />
            </svg>
        )
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <button style={{...data.button}} onClick={openIframe}>
                    <span style={{...data.text}}>{label}</span>
                </button>

                <div
                    className={styles.passModal}
                    style={{ display: checkoutActive ? 'block' : 'none' }}
                >
                    <div className={styles.passModalContent}>
                        <div id='loaderWrapper' className={styles.passLoaderWrapper}>
                            <img
                                alt='loader'
                                style={loaderImageStyle}
                                className={styles.passLoaderImg}
                                id='loaderImg'
                                src='https://www.thepetra.co/favicon.ico'
                            />
                        </div>
                        <span className={styles.passModalClose} onClick={closeModal}>
              {icons.close}
            </span>
                        {checkoutActive && (
                            <iframe
                                onLoad={() => setFrameVisible(true)}
                                src={iFrameSrc}
                                className={styles.passIframe}
                                style={iframeStyle}
                            />
                        )}
                    </div>
                </div>
            </header>
        </div>
    )
}