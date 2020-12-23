import React from 'react';
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'SEARCH SUBMITTED',
    description:
      'Wait for confirmation',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

function Mailosearch() {
    return (
        <div className='page-wrapper'>
            
            <div className='search-app'>
                <span className='span1'>Search Application for Mailo Land</span>
                <label>Briefly tell us why you need to do this search</label>
                <textarea></textarea>
                <div className='input'>
                    <label>Block Number</label>
                    <input type='text' placeholder='Enter Block No.'/>
                </div>
                
                <div className='input'>
                    <label>Plot Number</label>
                    <input  type='text' placeholder='Enter Plot No.'/>
                </div>
                
                <div className='input'>
                <label>County</label>
                    <select>
                       <option value='1'> Makindye</option>
                       <option value='2'> Lubaga</option>
                    </select>
                    <Button type="primary" onClick={openNotification}>
                        Search
                    </Button>
                </div>

                
               
            </div>


        </div>
    )
}

export default Mailosearch