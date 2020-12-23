import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';


function TitleDetails() {
    return (
        <div className='title-details'>
            <span className='span1'>Land Title Details</span>
            <h1>Block Number: 110 <br/>
                Plot Number: 290 <br/>
                County: Makindye <br/>
                District: Kampala <br/>
                Tenure System: Mailo Land<br/>
                Owner: Lwanga Derrick<br/></h1>

            <Timeline mode="alternate" style={{marginTop:'100px'}}>
                <Timeline.Item>Kavuma Peter 2009-09-01 to 2012-01-01</Timeline.Item>
                <Timeline.Item>nalubega Grace 2012-01-01 to 2015-09-01 </Timeline.Item>
                <Timeline.Item >
                Nsubuga Muhammad 2015-09-01 to 2016-12-01
                </Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="green">Lwanga Derrick 2016-12-01 to Present</Timeline.Item>
            </Timeline>
        </div>
    )
}

export default TitleDetails
