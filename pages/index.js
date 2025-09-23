<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TruthLens - AI-Powered Verification</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            font-family: 'Inter', sans-serif;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .floating-animation {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .pulse-glow {
            animation: pulse-glow 2s infinite;
        }
        
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
            50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }
        
        .slide-in {
            animation: slideIn 0.5s ease-out;
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .tab-active {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            transform: scale(1.05);
        }
        
        .loading-spinner {
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid #6366f1;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .result-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }
        
        .result-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .interactive-button {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .interactive-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .interactive-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }
        
        .interactive-button:hover::before {
            left: 100%;
        }
    </style>
</head>
<body class="min-h-screen gradient-bg">
    <div class="min-h-screen relative overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full floating-animation"></div>
            <div class="absolute top-40 right-20 w-24 h-24 bg-white opacity-10 rounded-full floating-animation" style="animation-delay: -2s;"></div>
            <div class="absolute bottom-20 left-1/4 w-40 h-40 bg-white opacity-5 rounded-full floating-animation" style="animation-delay: -4s;"></div>
        </div>

        <!-- Header -->
        <header class="relative z-10 text-center py-16 px-4">
            <h1 class="text-6xl md:text-7xl font-bold text-white mb-4 floating-animation">
                <span class="text-yellow-300">Truth</span>Lens
            </h1>
            <p class="text-xl md:text-2xl text-white opacity-90 max-w-2xl mx-auto leading-relaxed">
                Verify text and images with an intuitive, interactive AI-powered tool
            </p>
        </header>

        <!-- Main Content -->
        <main class="relative z-10 max-w-6xl mx-auto px-4 pb-16">
            <!-- Mode Tabs -->
            <div class="flex justify-center mb-8">
                <div class="glass-effect rounded-full p-2 flex space-x-2">
                    <button id="textTab" class="tab-button px-8 py-3 rounded-full text-white font-medium transition-all duration-300 interactive-button tab-active">
                        📝 Text Analysis
                    </button>
                    <button id="imageTab" class="tab-button px-8 py-3 rounded-full text-white font-medium transition-all duration-300 interactive-button">
                        🖼️ Image Analysis
                    </button>
                </div>
            </div>

            <!-- Text Mode -->
            <div id="textMode" class="slide-in">
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Input Section -->
                    <div class="glass-effect rounded-2xl p-8">
                        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <span class="mr-3">✍️</span> Enter Text to Verify
                        </h2>
                        <textarea 
                            id="textInput"
                            placeholder="Paste your text here for AI-powered verification..."
                            class="w-full h-40 p-4 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 border border-white border-opacity-20 focus:border-opacity-50 focus:outline-none resize-none transition-all duration-300"
                        ></textarea>
                        <div class="flex space-x-3 mt-6">
                            <button id="checkTextBtn" class="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-medium interactive-button pulse-glow">
                                <span id="textBtnText">🔍 Analyze Text</span>
                                <div id="textSpinner" class="loading-spinner mx-auto hidden"></div>
                            </button>
                            <button id="exampleTextBtn" class="bg-white bg-opacity-20 text-white py-3 px-6 rounded-xl font-medium interactive-button">
                                📄 Use Example
                            </button>
                        </div>
                    </div>

                    <!-- Text Results -->
                    <div class="glass-effect rounded-2xl p-8">
                        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <span class="mr-3">📊</span> Analysis Results
                        </h2>
                        <div id="textResult" class="min-h-40 p-4 rounded-xl bg-black bg-opacity-20 text-white border border-white border-opacity-10">
                            <div class="text-center text-white opacity-60 py-8">
                                Results will appear here after analysis...
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Image Mode -->
            <div id="imageMode" class="hidden slide-in">
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Image Input Section -->
                    <div class="glass-effect rounded-2xl p-8">
                        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <span class="mr-3">🖼️</span> Upload Image to Verify
                        </h2>
                        
                        <!-- File Drop Zone -->
                        <div id="dropZone" class="border-2 border-dashed border-white border-opacity-30 rounded-xl p-8 text-center transition-all duration-300 hover:border-opacity-50 cursor-pointer">
                            <div id="dropContent">
                                <div class="text-4xl mb-4">📁</div>
                                <p class="text-white opacity-80 mb-4">Drop an image here or click to browse</p>
                                <input type="file" id="imageInput" accept="image/*" class="hidden">
                                <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors">
                                    Choose File
                                </button>
                            </div>
                            <div id="imagePreview" class="hidden">
                                <img id="previewImg" class="max-w-full max-h-64 mx-auto rounded-lg shadow-lg">
                                <p id="fileName" class="text-white mt-4 font-medium"></p>
                            </div>
                        </div>

                        <div class="flex space-x-3 mt-6">
                            <button id="checkImageBtn" class="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-xl font-medium interactive-button pulse-glow">
                                <span id="imageBtnText">🔍 Analyze Image</span>
                                <div id="imageSpinner" class="loading-spinner mx-auto hidden"></div>
                            </button>
                            <button id="exampleImageBtn" class="bg-white bg-opacity-20 text-white py-3 px-6 rounded-xl font-medium interactive-button">
                                🎨 Use Example
                            </button>
                        </div>
                    </div>

                    <!-- Image Results -->
                    <div class="glass-effect rounded-2xl p-8">
                        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <span class="mr-3">📊</span> Analysis Results
                        </h2>
                        <div id="imageResult" class="min-h-40 p-4 rounded-xl bg-black bg-opacity-20 text-white border border-white border-opacity-10 overflow-auto">
                            <div class="text-center text-white opacity-60 py-8">
                                Results will appear here after analysis...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script>
        // State management
        let currentMode = 'text';
        let textInput = '';
        let imageFile = null;
        let imagePreview = '';
        let loading = false;

        // DOM elements
        const textTab = document.getElementById('textTab');
        const imageTab = document.getElementById('imageTab');
        const textMode = document.getElementById('textMode');
        const imageMode = document.getElementById('imageMode');
        const textInputEl = document.getElementById('textInput');
        const imageInput = document.getElementById('imageInput');
        const dropZone = document.getElementById('dropZone');
        const dropContent = document.getElementById('dropContent');
        const imagePreview = document.getElementById('imagePreview');
        const previewImg = document.getElementById('previewImg');
        const fileName = document.getElementById('fileName');

        // Tab switching
        function switchMode(mode) {
            currentMode = mode;
            
            // Update tab styles
            document.querySelectorAll('.tab-button').forEach(tab => {
                tab.classList.remove('tab-active');
            });
            
            if (mode === 'text') {
                textTab.classList.add('tab-active');
                textMode.classList.remove('hidden');
                imageMode.classList.add('hidden');
            } else {
                imageTab.classList.add('tab-active');
                imageMode.classList.remove('hidden');
                textMode.classList.add('hidden');
            }
        }

        // Event listeners for tabs
        textTab.addEventListener('click', () => switchMode('text'));
        imageTab.addEventListener('click', () => switchMode('image'));

        // Text analysis functionality
        async function handleCheckText() {
            if (loading) return;
            const text = textInputEl.value.trim();
            if (!text) {
                alert('Please enter some text to analyze!');
                return;
            }

            setLoading(true, 'text');
            document.getElementById('textResult').innerHTML = '<div class="text-center text-white opacity-60 py-8">Analyzing text...</div>';

            try {
                // Simulate API call - replace with actual endpoint
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Mock response - replace with actual API integration
                const mockResult = `
                    <div class="result-card p-6 rounded-xl">
                        <h3 class="text-lg font-bold text-white mb-4">✅ Analysis Complete</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-white opacity-80">Credibility Score:</span>
                                <span class="text-green-400 font-bold">87%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-white opacity-80">Fact Check Status:</span>
                                <span class="text-yellow-400 font-bold">Partially Verified</span>
                            </div>
                            <div class="mt-4">
                                <p class="text-white opacity-90 text-sm leading-relaxed">
                                    The statement about scientific discoveries appears to be plausible based on recent research trends, 
                                    though specific claims would need verification from peer-reviewed sources.
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                
                document.getElementById('textResult').innerHTML = mockResult;
            } catch (error) {
                document.getElementById('textResult').innerHTML = `
                    <div class="text-red-400 p-4">
                        <h3 class="font-bold mb-2">❌ Error</h3>
                        <p>${error.message || 'An error occurred during analysis'}</p>
                    </div>
                `;
            }

            setLoading(false, 'text');
        }

        // Image analysis functionality
        async function handleCheckImage() {
            if (loading) return;
            if (!imageFile) {
                alert('Please select an image to analyze!');
                return;
            }

            setLoading(true, 'image');
            document.getElementById('imageResult').innerHTML = '<div class="text-center text-white opacity-60 py-8">Analyzing image...</div>';

            try {
                // Convert to base64
                const base64 = await toBase64(imageFile);
                
                // Simulate API call - replace with actual endpoint
                await new Promise(resolve => setTimeout(resolve, 2500));
                
                // Mock response - replace with actual API integration
                const mockResult = `
                    <div class="result-card p-6 rounded-xl">
                        <h3 class="text-lg font-bold text-white mb-4">🔍 Image Analysis Complete</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-white opacity-80">Authenticity Score:</span>
                                <span class="text-green-400 font-bold">92%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-white opacity-80">Manipulation Detected:</span>
                                <span class="text-green-400 font-bold">None</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-white opacity-80">Image Quality:</span>
                                <span class="text-blue-400 font-bold">High</span>
                            </div>
                            <div class="mt-4">
                                <p class="text-white opacity-90 text-sm leading-relaxed">
                                    Image appears to be authentic with no signs of digital manipulation. 
                                    Metadata analysis shows consistent properties throughout the image.
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                
                document.getElementById('imageResult').innerHTML = mockResult;
            } catch (error) {
                document.getElementById('imageResult').innerHTML = `
                    <div class="text-red-400 p-4">
                        <h3 class="font-bold mb-2">❌ Error</h3>
                        <p>${error.message || 'An error occurred during analysis'}</p>
                    </div>
                `;
            }

            setLoading(false, 'image');
        }

        // Helper functions
        function setLoading(isLoading, type) {
            loading = isLoading;
            
            if (type === 'text') {
                const btn = document.getElementById('checkTextBtn');
                const text = document.getElementById('textBtnText');
                const spinner = document.getElementById('textSpinner');
                
                if (isLoading) {
                    text.classList.add('hidden');
                    spinner.classList.remove('hidden');
                    btn.disabled = true;
                    btn.classList.add('opacity-75');
                } else {
                    text.classList.remove('hidden');
                    spinner.classList.add('hidden');
                    btn.disabled = false;
                    btn.classList.remove('opacity-75');
                }
            } else {
                const btn = document.getElementById('checkImageBtn');
                const text = document.getElementById('imageBtnText');
                const spinner = document.getElementById('imageSpinner');
                
                if (isLoading) {
                    text.classList.add('hidden');
                    spinner.classList.remove('hidden');
                    btn.disabled = true;
                    btn.classList.add('opacity-75');
                } else {
                    text.classList.remove('hidden');
                    spinner.classList.add('hidden');
                    btn.disabled = false;
                    btn.classList.remove('opacity-75');
                }
            }
        }

        async function toBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        }

        // Example text functionality
        function useExampleText() {
            textInputEl.value = "Scientists have discovered a new particle at the LHC that could revolutionize energy production.";
        }

        // Example image functionality
        async function useExampleImage() {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = 512;
                canvas.height = 320;
                const ctx = canvas.getContext('2d');
                
                // Create gradient background
                const gradient = ctx.createLinearGradient(0, 0, 512, 320);
                gradient.addColorStop(0, '#6366f1');
                gradient.addColorStop(1, '#22c55e');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 512, 320);
                
                // Add text
                ctx.fillStyle = 'rgba(255,255,255,0.9)';
                ctx.font = 'bold 36px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('Example Image', 256, 160);
                
                // Convert to blob and file
                canvas.toBlob((blob) => {
                    if (!blob) {
                        alert("Couldn't create example image.");
                        return;
                    }
                    
                    const file = new File([blob], 'example.png', { type: 'image/png' });
                    handleFileSelect(file);
                }, 'image/png');
                
            } catch (error) {
                console.error(error);
                alert("Couldn't create example image.");
            }
        }

        // File handling
        function handleFileSelect(file) {
            imageFile = file;
            const url = URL.createObjectURL(file);
            
            previewImg.src = url;
            fileName.textContent = file.name;
            
            dropContent.classList.add('hidden');
            imagePreview.classList.remove('hidden');
        }

        // Drag and drop functionality
        dropZone.addEventListener('click', () => imageInput.click());
        
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('border-blue-400');
        });
        
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('border-blue-400');
        });
        
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-blue-400');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileSelect(files[0]);
            }
        });

        imageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                handleFileSelect(file);
            }
        });

        // Event listeners for buttons
        document.getElementById('checkTextBtn').addEventListener('click', handleCheckText);
        document.getElementById('checkImageBtn').addEventListener('click', handleCheckImage);
        document.getElementById('exampleTextBtn').addEventListener('click', useExampleText);
        document.getElementById('exampleImageBtn').addEventListener('click', useExampleImage);

        // Enter key support for text input
        textInputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                handleCheckText();
            }
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'983a58708363abf2',t:'MTc1ODYzMzY5MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
