import React, { useState } from 'react';
import { Upload as UploadIcon, X, Image, FileText, Tag, DollarSign } from 'lucide-react';

export const Upload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Textures');
  const [tags, setTags] = useState('');
  const [price, setPrice] = useState('');
  const [isPBR, setIsPBR] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      files,
      title,
      description,
      category,
      tags,
      price,
      isPBR
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Upload Material</h1>
          <p className="text-slate-400 text-sm sm:text-base">Share your 3D materials with the community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* File Upload */}
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
              <UploadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Upload Files
            </h2>
            
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 sm:p-8 text-center hover:border-blue-500 transition-colors">
              <input
                type="file"
                id="file-upload"
                multiple
                accept=".jpg,.jpeg,.png,.hdr,.exr,.zip,.rar"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center space-y-3"
              >
                <UploadIcon className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400" />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Click to upload files</p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Supports JPG, PNG, HDR, EXR, ZIP, RAR (Max 100MB each)
                  </p>
                </div>
              </label>
            </div>

            {files.length > 0 && (
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                <h3 className="text-white font-medium text-sm sm:text-base">Uploaded Files:</h3>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <Image className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                      <span className="text-white text-sm sm:text-base truncate">{file.name}</span>
                      <span className="text-slate-400 text-xs sm:text-sm flex-shrink-0">
                        ({(file.size / 1024 / 1024).toFixed(1)} MB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors flex-shrink-0 ml-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Material Details */}
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Material Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Enter material title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base resize-none"
                  placeholder="Describe your material..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  >
                    <option value="Textures">Textures</option>
                    <option value="HDRIs">HDRIs</option>
                    <option value="Materials">Materials</option>
                    <option value="Seamless">Seamless</option>
                    <option value="PBR">PBR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Price (USD) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tags (comma-separated)
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="wood, rustic, weathered, natural"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPBR"
                  checked={isPBR}
                  onChange={(e) => setIsPBR(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="isPBR" className="text-slate-300 text-sm sm:text-base">
                  This is a PBR material package
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-500 hover:to-teal-500 transition-all text-sm sm:text-base"
            >
              Upload Material
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};