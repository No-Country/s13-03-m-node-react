import path from 'path';

const chat = async (req, res) => {
    const indexPath = path.resolve(process.cwd(), 'public/index.html');
    res.sendFile(indexPath);
   // res.sendFile(process.cwd() + '/public/index.html');
};

export { chat };

