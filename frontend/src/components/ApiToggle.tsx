import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';

interface ApiToggleProps {
  useEfficientApi: boolean;
  onToggle: (useEfficient: boolean) => void;
}

export function ApiToggle({ useEfficientApi, onToggle }: ApiToggleProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">API Implementation Comparison</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => onToggle(true)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
            useEfficientApi
              ? 'border-green-500 bg-green-50 text-green-700'
              : 'border-gray-200 bg-gray-50 hover:border-green-300'
          }`}
        >
          <Zap className="w-5 h-5" />
          <div className="text-left">
            <div className="font-medium">Efficient API</div>
            <div className="text-sm opacity-75">Server-side pagination & filtering</div>
          </div>
        </button>
        
        <button
          onClick={() => onToggle(false)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
            !useEfficientApi
              ? 'border-orange-500 bg-orange-50 text-orange-700'
              : 'border-gray-200 bg-gray-50 hover:border-orange-300'
          }`}
        >
          <AlertTriangle className="w-5 h-5" />
          <div className="text-left">
            <div className="font-medium">Poor API</div>
            <div className="text-sm opacity-75">Loads all data at once</div>
          </div>
        </button>
      </div>
      
      {!useEfficientApi && (
        <div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
          <p className="text-orange-800 text-sm">
            ⚠️ <strong>Performance Warning:</strong> This API loads all data at once, 
            which can cause slow loading times and high memory usage. In production, 
            this approach would be problematic with large datasets.
          </p>
        </div>
      )}
    </div>
  );
}