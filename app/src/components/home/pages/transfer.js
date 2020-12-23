import React,{useState} from 'react';
import { Steps, Popover} from 'antd';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { Upload, message, Button,notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'TRANSFER REQUEST SUBMITTED',
    description:
      'We will notify you when you request is Approved or Rejected',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};
// File Upload
const prop = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// PDF DOWNLOAD
const MyDoc = () => (
  <Document>
    <Page>
    </Page>
  </Document>
)

const {Step} = Steps;
function Transfer() {

  const { Option } = Select;
  
// image upload
  const [fileList, updateFileList] = useState([]);
  const props = {
    fileList,
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png';
    },
    onChange: info => {
      console.log(info.fileList);
      // file.status is empty when beforeUpload return false
      updateFileList(info.fileList.filter(file => !!file.status));
    },
  };

  // progress bar
    const customDot = (dot, { status, index }) => (
        <Popover
          content={
            <span>
              step {index} status: {status}
            </span>
          }
        >
          {dot}
        </Popover>
      );
    return (
        <div className='transfer-wrapper'>
            <h1 > Land Transfer</h1>
            <Steps current={0} progressDot={customDot}>
                <Step title="In Progress" description="Submit Transfer Request" />
                <Step title="Waiting" description="Administration Body To Review Your Transfer Request" />
                <Step title="Waiting" description="New Land Owner to recieve land" />
            </Steps>
            <div className='notice'>
              <h1>Instructions</h1>
              <ol>
                <li>Download the Transfer Form and Consent Form and print them out.</li>
                <li>Fill them correctly, scan and upload them for submittion together with a photo of the person recieving the land transfer.</li>
              </ol>
              <h1>NOTICE</h1>
              <ul>
                <li>Submitting these forms is the first step of the transfer process, 
                  you will recieve a notice of acceptance or rejection of you request 
                  after it has be reviewed by the Lands Administration</li>
              </ul>
            </div>
            <div className='downloadlinks'>
              <PDFDownloadLink document={<MyDoc />} fileName="transferForm.pdf" className='link'>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Transfer Form')}
              </PDFDownloadLink>
              <PDFDownloadLink document={<MyDoc />} fileName="consentForm.pdf"  className='link'>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Cosent Form')}
              </PDFDownloadLink>
            </div>

            <div className='uploadlinks'>
                <Upload {...prop} className='link'>
                  <Button icon={<UploadOutlined />}>Upload  Transfer Form</Button>
                </Upload>
                <Upload {...prop} className='link'>
                  <Button icon={<UploadOutlined />}>Upload  Consent Form</Button>
                </Upload>
                <Upload {...props}className='link'>
                  <Button  icon={<UploadOutlined />}>Upload Image of Person recieving Transfer</Button>
                </Upload>
                <Select
                  showSearch
                  style={{ width: 'auto' }}
                  placeholder="Select Land"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                    <Option value="1">Makindye Plot No:290 Block No:110</Option>
                    <Option value="2">Busiro PlotNo:490 BlockNo:303</Option>
                  </Select>
            </div>
            <div className='submit'>
              <Button type="primary" size={'large'} className='submit-btn' onClick={openNotification}>
                SUBMIT REQUEST
              </Button>
            </div>
            
        </div>
    )
}

export default Transfer
