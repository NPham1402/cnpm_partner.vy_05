import { Modal } from 'antd'
import React from 'react'

const InputModal = (props) => {
    return (
        <Modal
            title={props.title}
            open={props.open}
            onCancel={() => props.setOpen(false)}
            width={800}
        >
            {props.typeForm}
        </Modal>
    )
}

export default InputModal