<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TruthLens - AI-Powered Content Verification Platform</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
            font-family: 'Inter', sans-serif;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .hero-gradient {
            background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%);
        }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .floating-animation {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }
        
        .btn-primary:hover::before {
            left: 100%;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }
        
        .btn-primary:active {
            transform: translateY(0px);
        }
        
        .section-padding {
            padding: 80px 0;
        }
        
        .nav-link {
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 50%;
            background: #6366f1;
            transition: all 0.3s ease;
        }
        
        .nav-link:hover::after {
            width: 100%;
            left: 0;
        }
        
        .feature-icon {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        .stats-counter {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        .spinner {
            border: 3px solid rgba(99, 102, 241, 0.3);
            border-top: 3px solid #6366f1;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .scroll-smooth {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="scroll-smooth">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <div class="text-2xl font-bold">
                        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Truth</span>Lens
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#home" onclick="smoothScrollTo('home')" class="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
                    <a href="#features" onclick="smoothScrollTo('features')" class="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</a>
                    <a href="#verify" onclick="smoothScrollTo('verify')" class="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Verify</a>
                    <a href="#about" onclick="smoothScrollTo('about')" class="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
                    <a href="#contact" onclick="smoothScrollTo('contact')" class="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-gradient min-h-screen flex items-center relative overflow-hidden">

        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
                    Verify Content with <span class="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">AI Power</span>
                </h1>
                <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed fade-in">
                    Advanced AI-powered content verification platform. Analyze text and images for authenticity, credibility, and factual accuracy using cutting-edge machine learning.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in">
                    <button onclick="smoothScrollTo('verify')" class="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg">
                        Start Verifying Now
                    </button>
                    <button onclick="smoothScrollTo('features')" class="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>



    <!-- Features Section -->
    <section id="features" class="section-padding bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Powerful Verification Features
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our AI-powered platform provides comprehensive content analysis with industry-leading accuracy and speed.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="glass-card rounded-2xl p-8 hover-lift">
                    <div class="feature-icon text-4xl mb-4">📝</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Text Analysis</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Advanced NLP algorithms analyze text for factual accuracy, bias detection, and credibility scoring with real-time fact-checking.
                    </p>
                </div>
                
                <div class="glass-card rounded-2xl p-8 hover-lift">
                    <div class="feature-icon text-4xl mb-4">🖼️</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Image Verification</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Detect deepfakes, manipulated images, and verify authenticity using cutting-edge computer vision technology.
                    </p>
                </div>
                
                <div class="glass-card rounded-2xl p-8 hover-lift">
                    <div class="feature-icon text-4xl mb-4">⚡</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Real-time Results</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Get instant verification results with detailed analysis reports and confidence scores in under 3 seconds.
                    </p>
                </div>
                
                <div class="glass-card rounded-2xl p-8 hover-lift">
                    <div class="feature-icon text-4xl mb-4">🔒</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Privacy First</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Your content is processed securely with end-to-end encryption. We never store or share your data.
                    </p>
                </div>
                
                <div class="glass-card rounded-2xl p-8 hover-lift">
                    <div class="feature-icon text-4xl mb-4">📊</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Detailed Reports</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Comprehensive analysis with source verification, confidence metrics, and actionable insights.
                    </p>
                </div>
                
                <div class="glass-card rounded-2xl p-8 hover-lift">
                    <div class="feature-icon text-4xl mb-4">🌐</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Multi-language</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Support for 50+ languages with cultural context awareness and region-specific fact-checking.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Verification Tool Section -->
    <section id="verify" class="section-padding bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Try Our Verification Tool
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience the power of AI-driven content verification. Upload text or images to get instant analysis.
                </p>
            </div>

            <!-- Mode Tabs -->
            <div class="flex justify-center mb-12">
                <div class="bg-gray-100 rounded-2xl p-2 flex space-x-2">
                    <button id="textTab" class="tab-button px-8 py-4 rounded-xl text-gray-700 font-semibold transition-all duration-300 bg-white shadow-sm">
                        📝 Text Analysis
                    </button>
                    <button id="imageTab" class="tab-button px-8 py-4 rounded-xl text-gray-700 font-semibold transition-all duration-300">
                        🖼️ Image Analysis
                    </button>
                </div>
            </div>

            <!-- Text Mode -->
            <div id="textMode" class="max-w-4xl mx-auto">
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Input Section -->
                    <div class="glass-card rounded-2xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span class="mr-3">✍️</span> Enter Text to Verify
                        </h3>
                        <textarea 
                            id="textInput"
                            placeholder="Paste your text here for AI-powered verification..."
                            class="w-full h-40 p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none transition-all duration-300"
                        ></textarea>
                        <div class="flex space-x-3 mt-6">
                            <button id="checkTextBtn" class="flex-1 btn-primary text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center">
                                <span id="textBtnText">🔍 Analyze Text</span>
                                <div id="textSpinner" class="spinner mx-auto hidden"></div>
                            </button>
                            <button id="exampleTextBtn" class="bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                                📄 Use Example
                            </button>
                        </div>
                    </div>

                    <!-- Text Results -->
                    <div class="glass-card rounded-2xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span class="mr-3">📊</span> Analysis Results
                        </h3>
                        <div id="textResult" class="min-h-40 p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div class="text-center text-gray-500 py-8">
                                Results will appear here after analysis...
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Image Mode -->
            <div id="imageMode" class="max-w-4xl mx-auto hidden">
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Image Input Section -->
                    <div class="glass-card rounded-2xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span class="mr-3">🖼️</span> Upload Image to Verify
                        </h3>
                        
                        <!-- File Drop Zone -->
                        <div id="dropZone" class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all duration-300 hover:border-blue-400 cursor-pointer">
                            <div id="dropContent">
                                <div class="text-4xl mb-4">📁</div>
                                <p class="text-gray-600 mb-4">Drop an image here or click to browse</p>
                                <input type="file" id="imageInput" accept="image/*" class="hidden">
                                <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors">
                                    Choose File
                                </button>
                            </div>
                            <div id="imagePreview" class="hidden">
                                <img id="previewImg" class="max-w-full max-h-64 mx-auto rounded-lg shadow-lg">
                                <p id="fileName" class="text-gray-700 mt-4 font-medium"></p>
                            </div>
                        </div>

                        <div class="flex space-x-3 mt-6">
                            <button id="checkImageBtn" class="flex-1 btn-primary text-white py-3 px-6 rounded-xl font-semibold">
                                <span id="imageBtnText">🔍 Analyze Image</span>
                                <div id="imageSpinner" class="spinner mx-auto hidden"></div>
                            </button>
                            <button id="exampleImageBtn" class="bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                                🎨 Use Example
                            </button>
                        </div>
                    </div>

                    <!-- Image Results -->
                    <div class="glass-card rounded-2xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span class="mr-3">📊</span> Analysis Results
                        </h3>
                        <div id="imageResult" class="min-h-40 p-4 rounded-xl bg-gray-50 border border-gray-200 overflow-auto">
                            <div class="text-center text-gray-500 py-8">
                                Results will appear here after analysis...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Fighting Misinformation with AI
                    </h2>
                    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                        TruthLens was founded with a mission to combat the spread of misinformation in our digital age. 
                        Our advanced AI algorithms analyze content across multiple dimensions to provide accurate, 
                        reliable verification results.
                    </p>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        Trusted by journalists, researchers, and organizations worldwide, we're committed to 
                        promoting truth and transparency in digital content.
                    </p>
                    <div class="flex space-x-4">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-600">Advanced</div>
                            <div class="text-sm text-gray-600">AI Models</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-600">Real-time</div>
                            <div class="text-sm text-gray-600">Analysis</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-600">Secure</div>
                            <div class="text-sm text-gray-600">Processing</div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 class="text-2xl font-bold mb-4">Why Choose TruthLens?</h3>
                        <ul class="space-y-3">
                            <li class="flex items-center">
                                <span class="mr-3">✓</span> Industry-leading accuracy
                            </li>
                            <li class="flex items-center">
                                <span class="mr-3">✓</span> Real-time verification
                            </li>
                            <li class="flex items-center">
                                <span class="mr-3">✓</span> Privacy-first approach
                            </li>
                            <li class="flex items-center">
                                <span class="mr-3">✓</span> Multi-language support
                            </li>
                            <li class="flex items-center">
                                <span class="mr-3">✓</span> Comprehensive reporting
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Get in Touch
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Have questions about our verification technology? Want to integrate TruthLens into your platform? We'd love to hear from you.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">📧</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p class="text-gray-600">contact@truthlens.ai</p>
                </div>
                
                <div class="text-center">
                    <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">💬</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                    <p class="text-gray-600">Available 24/7</p>
                </div>
                
                <div class="text-center">
                    <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">📱</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">API Access</h3>
                    <p class="text-gray-600">Developer resources</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <div class="text-2xl font-bold mb-4">
                        <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Truth</span>Lens
                    </div>
                    <p class="text-gray-400 leading-relaxed">
                        AI-powered content verification platform fighting misinformation with cutting-edge technology.
                    </p>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Product</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">Text Verification</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Image Analysis</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">API Access</a></li>

                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Company</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>

                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Support</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>

                        <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 TruthLens. All rights reserved. Fighting misinformation with AI.</p>
            </div>
        </div>
    </footer>

    <script>
        // Enhanced smooth scrolling function with animation
        function smoothScrollTo(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const offsetTop = element.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Add a subtle highlight animation to the target section
                element.style.transition = 'all 0.6s ease';
                element.style.transform = 'scale(1.01)';
                
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 600);
            }
        }

        // Legacy function for compatibility
        function scrollToSection(sectionId) {
            smoothScrollTo(sectionId);
        }

        // State management
        let currentMode = 'text';
        let textInput = '';
        let imageFile = null;
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
                tab.classList.remove('bg-white', 'shadow-sm');
                tab.classList.add('hover:bg-gray-200');
            });
            
            if (mode === 'text') {
                textTab.classList.add('bg-white', 'shadow-sm');
                textTab.classList.remove('hover:bg-gray-200');
                textMode.classList.remove('hidden');
                imageMode.classList.add('hidden');
            } else {
                imageTab.classList.add('bg-white', 'shadow-sm');
                imageTab.classList.remove('hover:bg-gray-200');
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
            document.getElementById('textResult').innerHTML = '<div class="text-center text-gray-500 py-8">Analyzing text...</div>';

            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                const mockResult = `
                    <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <span class="text-green-500 mr-2">✅</span> Analysis Complete
                        </h4>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Credibility Score:</span>
                                <span class="text-green-600 font-bold">87%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Fact Check Status:</span>
                                <span class="text-yellow-600 font-bold">Partially Verified</span>
                            </div>
                            <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p class="text-gray-700 text-sm leading-relaxed">
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
                    <div class="bg-red-50 border border-red-200 rounded-xl p-4">
                        <h4 class="text-red-800 font-bold mb-2">❌ Error</h4>
                        <p class="text-red-700">${error.message || 'An error occurred during analysis'}</p>
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
            document.getElementById('imageResult').innerHTML = '<div class="text-center text-gray-500 py-8">Analyzing image...</div>';

            try {
                await new Promise(resolve => setTimeout(resolve, 2500));
                
                const mockResult = `
                    <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <span class="text-green-500 mr-2">🔍</span> Image Analysis Complete
                        </h4>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Authenticity Score:</span>
                                <span class="text-green-600 font-bold">92%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Manipulation Detected:</span>
                                <span class="text-green-600 font-bold">None</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Image Quality:</span>
                                <span class="text-blue-600 font-bold">High</span>
                            </div>
                            <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p class="text-gray-700 text-sm leading-relaxed">
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
                    <div class="bg-red-50 border border-red-200 rounded-xl p-4">
                        <h4 class="text-red-800 font-bold mb-2">❌ Error</h4>
                        <p class="text-red-700">${error.message || 'An error occurred during analysis'}</p>
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

        // Example text functionality
        function useExampleText() {
            textInputEl.value = "Scientists have discovered a new particle at the LHC that could revolutionize energy production and lead to breakthrough technologies in the next decade.";
        }

        // Example image functionality
        async function useExampleImage() {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = 512;
                canvas.height = 320;
                const ctx = canvas.getContext('2d');
                
                const gradient = ctx.createLinearGradient(0, 0, 512, 320);
                gradient.addColorStop(0, '#6366f1');
                gradient.addColorStop(1, '#8b5cf6');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 512, 320);
                
                ctx.fillStyle = 'rgba(255,255,255,0.9)';
                ctx.font = 'bold 36px Inter';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('Example Image', 256, 160);
                
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

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'983a9968253231cf',t:'MTc1ODYzNjM1MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
