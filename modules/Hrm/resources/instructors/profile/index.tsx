'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { instructorBreadcrumbs } from '../data';
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Mail,
  MapPin,
  Calendar,
  CreditCard,
  BookOpen,
  Clock,
  Settings,
  Edit3,
  Download,
  Star,
  TrendingUp,
  Award,
} from "lucide-react"

export default function InstructorProfile() {

    const [isEditing, setIsEditing] = useState(false)

    const userData = {
      name: "Alexandra Chen",
      email: "alexandra.chen@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      joinDate: "March 2023",
      avatar: "/placeholder.svg?height=120&width=120",
      bio: "Passionate learner and technology enthusiast with a focus on web development and design.",
      totalCourses: 12,
      completedCourses: 8,
      ongoingCourses: 4,
      totalSpent: 2450,
    }
  
    const transactions = [
      { id: 1, course: "Advanced React Development", amount: 299, date: "2024-01-15", status: "Completed" },
      { id: 2, course: "UI/UX Design Masterclass", amount: 199, date: "2024-01-10", status: "Completed" },
      { id: 3, course: "Node.js Backend Development", amount: 249, date: "2023-12-28", status: "Completed" },
      { id: 4, course: "Python for Data Science", amount: 179, date: "2023-12-15", status: "Refunded" },
    ]
  
    const completedCourses = [
      {
        id: 1,
        title: "Advanced React Development",
        instructor: "John Smith",
        rating: 4.8,
        completion: 100,
        certificate: true,
      },
      {
        id: 2,
        title: "UI/UX Design Masterclass",
        instructor: "Sarah Johnson",
        rating: 4.9,
        completion: 100,
        certificate: true,
      },
      {
        id: 3,
        title: "JavaScript Fundamentals",
        instructor: "Mike Wilson",
        rating: 4.7,
        completion: 100,
        certificate: true,
      },
      { id: 4, title: "CSS Grid & Flexbox", instructor: "Emma Davis", rating: 4.6, completion: 100, certificate: false },
    ]
  
    const ongoingCourses = [
      {
        id: 1,
        title: "Node.js Backend Development",
        instructor: "David Brown",
        progress: 65,
        nextLesson: "Authentication & Security",
        dueDate: "2024-02-15",
      },
      {
        id: 2,
        title: "TypeScript Deep Dive",
        instructor: "Lisa Anderson",
        progress: 40,
        nextLesson: "Advanced Types",
        dueDate: "2024-02-20",
      },
      {
        id: 3,
        title: "GraphQL Fundamentals",
        instructor: "Tom Garcia",
        progress: 25,
        nextLesson: "Mutations & Subscriptions",
        dueDate: "2024-02-25",
      },
    ]

    return (
            <AppLayout breadcrumbs={instructorBreadcrumbs}>
                <Head title="Instructors" />
                    <div className="gap-2 p-4 ">
                    <div className="min-h-screen bg-gray-50 dark:bg-stone-950 p-4">
      <div className="mx-auto max-w-6xl">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden border shadow-sm dark:bg-stone-950 dark:border-green-900">
          <div className="h-24 bg-gray-100 dark:bg-green-900"></div>
          <CardContent className="relative px-8 pb-8">
            <div className="flex flex-col items-center sm:flex-row sm:items-end sm:space-x-6">
              <Avatar className="h-28 w-28 -mt-14 border-4 border-white shadow-lg">
                <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                <AvatarFallback className="text-xl font-semibold bg-gray-600 dark:bg-gray-500 text-white">
                  {userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{userData.name}</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{userData.bio}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {userData.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {userData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {userData.joinDate}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <Button variant="outline" size="sm">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Courses</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{userData.totalCourses}</p>
                </div>
                <BookOpen className="h-8 w-8 text-gray-600 dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Completed</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{userData.completedCourses}</p>
                </div>
                <Award className="h-8 w-8 text-gray-600 dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">In Progress</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{userData.ongoingCourses}</p>
                </div>
                <Clock className="h-8 w-8 text-gray-600 dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Spent</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">${userData.totalSpent}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-gray-600 dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
          <Tabs defaultValue="main" className="w-full">
            <CardHeader className="pb-4">
              <TabsList className="grid w-full grid-cols-5 bg-gray-50 dark:bg-green-900">
                <TabsTrigger value="main" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Main Data
                </TabsTrigger>
                <TabsTrigger value="transactions" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Transactions
                </TabsTrigger>
                <TabsTrigger value="courses" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Courses
                </TabsTrigger>
                <TabsTrigger value="ongoing" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Ongoing
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="pt-0">
              <TabsContent value="main" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold dark:text-white">Personal Information</h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" value={userData.name} disabled={!isEditing} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" value={userData.email} disabled={!isEditing} />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" value={userData.phone} disabled={!isEditing} />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" value={userData.location} disabled={!isEditing} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold dark:text-white">Learning Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="dark:text-white">Course Completion Rate</span>
                          <span className="dark:text-white">67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="dark:text-white">Monthly Learning Goal</span>
                          <span className="dark:text-white">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center p-4 bg-gray-50 dark:bg-green-900 rounded-lg">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Hours Learned</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 dark:bg-green-900 rounded-lg">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">23</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Certificates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="transactions" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold dark:text-white">Transaction History</h3>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <Card key={transaction.id} className="border shadow-sm dark:bg-black dark:border-green-900">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium dark:text-white">{transaction.course}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{transaction.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold dark:text-white">${transaction.amount}</p>
                            <Badge
                              variant={transaction.status === "Completed" ? "default" : "destructive"}
                              className="mt-1"
                            >
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="courses" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold dark:text-white">Completed Courses</h3>
                  <Badge variant="secondary">{completedCourses.length} courses</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {completedCourses.map((course) => (
                    <Card key={course.id} className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium dark:text-white">{course.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">by {course.instructor}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium dark:text-white">{course.rating}</span>
                            </div>
                            {course.certificate && (
                              <Badge variant="outline" className="text-green-900 border-gray-300">
                                <Award className="h-3 w-3 mr-1" />
                                Certified
                              </Badge>
                            )}
                          </div>
                          <Progress value={course.completion} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ongoing" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold dark:text-white">Ongoing Courses</h3>
                  <Badge variant="secondary">{ongoingCourses.length} active</Badge>
                </div>
                <div className="space-y-4">
                  {ongoingCourses.map((course) => (
                    <Card key={course.id} className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium dark:text-white">{course.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">by {course.instructor}</p>
                            </div>
                            <Badge variant="outline">Due {course.dueDate}</Badge>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="dark:text-white">Progress</span>
                              <span className="dark:text-white">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="flex justify-between items-center pt-2">
                            <div>
                              <p className="text-sm font-medium dark:text-white">Next: {course.nextLesson}</p>
                            </div>
                            <Button size="sm">Continue</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-white">Account Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 dark:bg-green-900 rounded-lg">
                        <div>
                          <h4 className="font-medium dark:text-white">Email Notifications</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Receive updates about your courses</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 dark:bg-green-900 rounded-lg">
                        <div>
                          <h4 className="font-medium dark:text-white">Privacy Settings</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Manage your profile visibility</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 dark:bg-green-900 rounded-lg">
                        <div>
                          <h4 className="font-medium dark:text-white">Learning Preferences</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Customize your learning experience</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-400">Danger Zone</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <div>
                          <h4 className="font-medium text-red-700 dark:text-red-400">Delete Account</h4>
                          <p className="text-sm text-red-600 dark:text-red-300">
                            Permanently delete your account and all data
                          </p>
                        </div>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
                    </div>
            </AppLayout>
    );
}
