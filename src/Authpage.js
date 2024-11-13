#include <bits/stdc++.h>
using namespace std;

// Function to sort elements by frequency and, for ties, by their first appearance
void sortByFrequency(vector<int>& arr) {
    unordered_map<int, pair<int, int>> freqMap; // Map to store frequency and first index of each element

    // Populate the map with frequencies and first occurrence index
    for (int i = 0; i < arr.size(); i++) {
        if (freqMap.find(arr[i]) == freqMap.end()) {
            freqMap[arr[i]] = {1, i}; // Initialize frequency and store first occurrence index
        } else {
            freqMap[arr[i]].first++; // Increment frequency
        }
    }

    // Sort the array based on frequency and, in case of ties, by first appearance index
    sort(arr.begin(), arr.end(), [&](int a, int b) {
        if (freqMap[a].first != freqMap[b].first) {
            return freqMap[a].first > freqMap[b].first; // Higher frequency first
        }
        return freqMap[a].second < freqMap[b].second; // If same frequency, maintain order of appearance
    });

    // Print the sorted array
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    int n;
    cout << "Enter number of elements: ";
    cin >> n;
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    sortByFrequency(arr);

    return 0;
}
