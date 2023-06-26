import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";

function ImageUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    uploadImage("mycontainer", file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload File</button>
    </form>
  );
}

async function uploadImage(containerName, file) {
  const blobServiceClient = new BlobServiceClient(
    "https://milantisdevsa.blob.core.windows.net/;QueueEndpoint=https://milantisdevsa.queue.core.windows.net/;FileEndpoint=https://milantisdevsa.file.core.windows.net/;TableEndpoint=https://milantisdevsa.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2023-12-09T01:23:54Z&st=2023-06-08T16:23:54Z&spr=https&sig=ZrDyq9fhVQRv9amx6u7quTN0C0GwmnLWhTCPr0b9GRM%3D"+"?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2023-12-09T01:23:54Z&st=2023-06-08T16:23:54Z&spr=https&sig=ZrDyq9fhVQRv9amx6u7quTN0C0GwmnLWhTCPr0b9GRM%3D"
  );
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlobClient(file.name);
  const blockBlobClient = blobClient.getBlockBlobClient();
  const result = await blockBlobClient.uploadData(file, {
    blockSize: 4 * 1024 * 1024,
    concurrency: 20,
    onProgress: ev => console.log(ev)
  });
  console.log(`Upload of file '${file.name}' completed`);
}

export default ImageUpload;