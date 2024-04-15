import React from 'react'

export default function Form() {
    return (
        <div class="max-w-[100%] py-2 sm:px-6 mx-auto">
            <form>
                <div class="bg-white rounded-xl shadow-lg dark:bg-neutral-900 border-2 pt-5">
                    <div class="pt-0 p-4 sm:pt-0 sm:p-7">
                        <div class="space-y-4 sm:space-y-6">


                            <div class="space-y-2">
                                <label for="af-submit-app-project-name" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Project name
                                </label>

                                <input id="af-submit-app-project-name" type="text" class="border-2 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter project name" />
                            </div>

                            <div class="space-y-2">
                                <label for="af-submit-project-url" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Project URL
                                </label>

                                <input id="af-submit-project-url" type="text" class="border-2 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="https://example.so" />
                            </div>


                            <div class="space-y-2">
                                <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Category
                                </label>

                                <select id="af-submit-app-category" class="border-2 py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                    <option selected>Select a category</option>
                                    <option>Ecommerce</option>
                                    <option>Finance</option>
                                    <option>Marketplace</option>
                                    <option>Social</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <div class="space-y-2">
                                <label for="af-submit-app-description" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Description
                                </label>

                                <textarea id="af-submit-app-description" class="border-2  py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="6" placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."></textarea>
                            </div>
                        </div>

                        <div class="mt-5 flex justify-center gap-x-2">
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                Submit your project
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
