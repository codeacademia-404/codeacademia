import type { Tutorial } from './index';

export const mlTutorials: Tutorial[] = [
  {
    id: 'ml-basics', title: 'Machine Learning Fundamentals', slug: 'fundamentals',
    category: 'Machine Learning', categorySlug: 'machine-learning',
    description: 'Understand ML concepts — supervised/unsupervised learning, regression, classification.',
    difficulty: 'Advanced', duration: '60 min', tags: ['ml', 'ai', 'data-science'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'ML Foundations',
      lessons: [
        { id: 'l1', title: 'What is Machine Learning?', slug: 'introduction',
          content: `Machine Learning is a subset of Artificial Intelligence that enables systems to learn and improve from experience without being explicitly programmed.\n\n## Types of Machine Learning:\n1. **Supervised Learning** — Training with labeled data (classification, regression)\n2. **Unsupervised Learning** — Finding patterns in unlabeled data (clustering, dimensionality reduction)\n3. **Reinforcement Learning** — Learning through reward/punishment signals`,
          codeExamples: [{ language: 'python', title: 'Linear Regression with scikit-learn', code: `import numpy as np\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import mean_squared_error, r2_score\n\n# Sample data: study hours vs exam score\nX = np.array([[1], [2], [3], [4], [5], [6], [7], [8]])\ny = np.array([45, 55, 60, 68, 72, 80, 85, 92])\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Predict\ny_pred = model.predict(X_test)\n\n# Evaluate\nprint(f"R² Score: {r2_score(y_test, y_pred):.4f}")\nprint(f"MSE: {mean_squared_error(y_test, y_pred):.4f}")\n\n# Predict for new data\nnew_hours = np.array([[10]])\nprint(f"Predicted score for 10 hours: {model.predict(new_hours)[0]:.1f}")`, output: 'R² Score: 0.9856\nMSE: 2.3451\nPredicted score for 10 hours: 98.5' }],
          tips: ['Always split data into training and testing sets before training.', 'Feature scaling (normalization/standardization) improves model performance.'],
          interviewQuestions: [
            { question: 'What is overfitting and how do you prevent it?', answer: 'Overfitting occurs when a model learns noise in training data and performs poorly on new data. Prevention: use more training data, feature selection, regularization (L1/L2), cross-validation, dropout (in neural networks), and early stopping.' },
            { question: 'Explain the bias-variance tradeoff.', answer: 'Bias is error from overly simplistic models (underfitting). Variance is error from overly complex models (overfitting). The tradeoff: decreasing bias increases variance and vice versa. The goal is to find the sweet spot that minimizes total error.' },
          ],
        },
        { id: 'l2', title: 'Classification Algorithms', slug: 'classification',
          content: `Classification is a supervised learning technique where the model predicts categorical labels.`,
          codeExamples: [{ language: 'python', title: 'Classification Example', code: `from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import classification_report\n\n# Load dataset\niris = load_iris()\nX_train, X_test, y_train, y_test = train_test_split(\n    iris.data, iris.target, test_size=0.3, random_state=42\n)\n\n# Train Random Forest\nclf = RandomForestClassifier(n_estimators=100, random_state=42)\nclf.fit(X_train, y_train)\n\n# Predict & evaluate\ny_pred = clf.predict(X_test)\nprint(classification_report(y_test, y_pred,\n    target_names=iris.target_names))`, output: '              precision  recall  f1-score  support\n   setosa       1.00    1.00     1.00      19\nversicolor     1.00    0.93     0.96      13\n virginica     0.93    1.00     0.96      13\n  accuracy                       0.98      45' }],
        },
      ],
    }],
  },
  {
    id: 'ml-neural-networks', title: 'Neural Networks & Deep Learning', slug: 'neural-networks',
    category: 'Machine Learning', categorySlug: 'machine-learning',
    description: 'Build neural networks with TensorFlow and Keras.',
    difficulty: 'Advanced', duration: '55 min', tags: ['ml', 'deep-learning', 'tensorflow'],
    author: 'Sasidharan M', lastUpdated: '2025-12-15',
    chapters: [{
      id: 'ch1', title: 'Neural Networks',
      lessons: [
        { id: 'l1', title: 'Building a Neural Network', slug: 'building-nn',
          content: `Neural networks are computing systems inspired by biological neural networks. They consist of layers of interconnected nodes (neurons) that process information.`,
          codeExamples: [{ language: 'python', title: 'Simple Neural Network with Keras', code: `import tensorflow as tf\nfrom tensorflow import keras\n\n# Load MNIST dataset\n(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()\nX_train = X_train.reshape(-1, 784).astype('float32') / 255\nX_test = X_test.reshape(-1, 784).astype('float32') / 255\n\n# Build model\nmodel = keras.Sequential([\n    keras.layers.Dense(128, activation='relu', input_shape=(784,)),\n    keras.layers.Dropout(0.2),\n    keras.layers.Dense(64, activation='relu'),\n    keras.layers.Dropout(0.2),\n    keras.layers.Dense(10, activation='softmax')\n])\n\n# Compile\nmodel.compile(\n    optimizer='adam',\n    loss='sparse_categorical_crossentropy',\n    metrics=['accuracy']\n)\n\n# Train\nhistory = model.fit(X_train, y_train, epochs=10,\n                    validation_split=0.2, batch_size=32)\n\n# Evaluate\ntest_loss, test_acc = model.evaluate(X_test, y_test)\nprint(f"Test accuracy: {test_acc:.4f}")`, output: 'Epoch 10/10 - accuracy: 0.9845\nTest accuracy: 0.9789' }],
        },
      ],
    }],
  },
];
