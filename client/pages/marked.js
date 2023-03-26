import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';

function MarkdownEditor() {
    const [text, setText] = useState('');

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold my-4">Markdown Editor</h2>
                <div className="w-full md:w-3/4 lg:w-1/2 my-4">
                    <TextareaAutosize
                        className="block w-full bg-black p-2 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:shadow-outline resize-none"
                        minRows={10}
                        value={text}
                        onChange={handleChange}
                        placeholder="Start typing your Markdown here..."
                    />
                </div>
                <div className="w-full md:w-3/4 lg:w-1/2 my-4">
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default MarkdownEditor;
